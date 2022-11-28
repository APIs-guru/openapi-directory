import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JsonSchema } from "./jsonschema";



// RestMethodMediaUploadProtocolsResumable
/** 
 * Supports the Resumable Media Upload protocol.
**/
export class RestMethodMediaUploadProtocolsResumable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=multipart" })
  multipart?: boolean;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;
}


// RestMethodMediaUploadProtocolsSimple
/** 
 * Supports uploading as a single HTTP request.
**/
export class RestMethodMediaUploadProtocolsSimple extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=multipart" })
  multipart?: boolean;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;
}


// RestMethodMediaUploadProtocols
/** 
 * Supported upload protocols.
**/
export class RestMethodMediaUploadProtocols extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resumable" })
  resumable?: RestMethodMediaUploadProtocolsResumable;

  @SpeakeasyMetadata({ data: "json, name=simple" })
  simple?: RestMethodMediaUploadProtocolsSimple;
}


// RestMethodMediaUpload
/** 
 * Media upload parameters.
**/
export class RestMethodMediaUpload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accept" })
  accept?: string[];

  @SpeakeasyMetadata({ data: "json, name=maxSize" })
  maxSize?: string;

  @SpeakeasyMetadata({ data: "json, name=protocols" })
  protocols?: RestMethodMediaUploadProtocols;
}


// RestMethodRequest
/** 
 * The schema for the request.
**/
export class RestMethodRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=$ref" })
  dollarRef?: string;

  @SpeakeasyMetadata({ data: "json, name=parameterName" })
  parameterName?: string;
}


// RestMethodResponse
/** 
 * The schema for the response.
**/
export class RestMethodResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=$ref" })
  dollarRef?: string;
}


export class RestMethod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etagRequired" })
  etagRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=flatPath" })
  flatPath?: string;

  @SpeakeasyMetadata({ data: "json, name=httpMethod" })
  httpMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=mediaUpload" })
  mediaUpload?: RestMethodMediaUpload;

  @SpeakeasyMetadata({ data: "json, name=parameterOrder" })
  parameterOrder?: string[];

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: JsonSchema })
  parameters?: Map<string, JsonSchema>;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=request" })
  request?: RestMethodRequest;

  @SpeakeasyMetadata({ data: "json, name=response" })
  response?: RestMethodResponse;

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes?: string[];

  @SpeakeasyMetadata({ data: "json, name=supportsMediaDownload" })
  supportsMediaDownload?: boolean;

  @SpeakeasyMetadata({ data: "json, name=supportsMediaUpload" })
  supportsMediaUpload?: boolean;

  @SpeakeasyMetadata({ data: "json, name=supportsSubscription" })
  supportsSubscription?: boolean;

  @SpeakeasyMetadata({ data: "json, name=useMediaDownloadService" })
  useMediaDownloadService?: boolean;
}
