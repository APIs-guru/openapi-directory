import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JsonSchema } from "./jsonschema";


// RestMethodMediaUploadProtocolsResumable
/** 
 * Supports the Resumable Media Upload protocol.
**/
export class RestMethodMediaUploadProtocolsResumable extends SpeakeasyBase {
  @Metadata({ data: "json, name=multipart" })
  multipart?: boolean;

  @Metadata({ data: "json, name=path" })
  path?: string;
}


// RestMethodMediaUploadProtocolsSimple
/** 
 * Supports uploading as a single HTTP request.
**/
export class RestMethodMediaUploadProtocolsSimple extends SpeakeasyBase {
  @Metadata({ data: "json, name=multipart" })
  multipart?: boolean;

  @Metadata({ data: "json, name=path" })
  path?: string;
}


// RestMethodMediaUploadProtocols
/** 
 * Supported upload protocols.
**/
export class RestMethodMediaUploadProtocols extends SpeakeasyBase {
  @Metadata({ data: "json, name=resumable" })
  resumable?: RestMethodMediaUploadProtocolsResumable;

  @Metadata({ data: "json, name=simple" })
  simple?: RestMethodMediaUploadProtocolsSimple;
}


// RestMethodMediaUpload
/** 
 * Media upload parameters.
**/
export class RestMethodMediaUpload extends SpeakeasyBase {
  @Metadata({ data: "json, name=accept" })
  accept?: string[];

  @Metadata({ data: "json, name=maxSize" })
  maxSize?: string;

  @Metadata({ data: "json, name=protocols" })
  protocols?: RestMethodMediaUploadProtocols;
}


// RestMethodRequest
/** 
 * The schema for the request.
**/
export class RestMethodRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=$ref" })
  dollarRef?: string;

  @Metadata({ data: "json, name=parameterName" })
  parameterName?: string;
}


// RestMethodResponse
/** 
 * The schema for the response.
**/
export class RestMethodResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=$ref" })
  dollarRef?: string;
}


export class RestMethod extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=etagRequired" })
  etagRequired?: boolean;

  @Metadata({ data: "json, name=flatPath" })
  flatPath?: string;

  @Metadata({ data: "json, name=httpMethod" })
  httpMethod?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=mediaUpload" })
  mediaUpload?: RestMethodMediaUpload;

  @Metadata({ data: "json, name=parameterOrder" })
  parameterOrder?: string[];

  @Metadata({ data: "json, name=parameters", elemType: shared.JsonSchema })
  parameters?: Map<string, JsonSchema>;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=request" })
  request?: RestMethodRequest;

  @Metadata({ data: "json, name=response" })
  response?: RestMethodResponse;

  @Metadata({ data: "json, name=scopes" })
  scopes?: string[];

  @Metadata({ data: "json, name=supportsMediaDownload" })
  supportsMediaDownload?: boolean;

  @Metadata({ data: "json, name=supportsMediaUpload" })
  supportsMediaUpload?: boolean;

  @Metadata({ data: "json, name=supportsSubscription" })
  supportsSubscription?: boolean;

  @Metadata({ data: "json, name=useMediaDownloadService" })
  useMediaDownloadService?: boolean;
}
