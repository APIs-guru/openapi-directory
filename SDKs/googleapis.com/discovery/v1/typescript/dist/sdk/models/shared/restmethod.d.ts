import { SpeakeasyBase } from "../../../internal/utils";
import { JsonSchema } from "./jsonschema";
/**
 * Supports the Resumable Media Upload protocol.
**/
export declare class RestMethodMediaUploadProtocolsResumable extends SpeakeasyBase {
    multipart?: boolean;
    path?: string;
}
/**
 * Supports uploading as a single HTTP request.
**/
export declare class RestMethodMediaUploadProtocolsSimple extends SpeakeasyBase {
    multipart?: boolean;
    path?: string;
}
/**
 * Supported upload protocols.
**/
export declare class RestMethodMediaUploadProtocols extends SpeakeasyBase {
    resumable?: RestMethodMediaUploadProtocolsResumable;
    simple?: RestMethodMediaUploadProtocolsSimple;
}
/**
 * Media upload parameters.
**/
export declare class RestMethodMediaUpload extends SpeakeasyBase {
    accept?: string[];
    maxSize?: string;
    protocols?: RestMethodMediaUploadProtocols;
}
/**
 * The schema for the request.
**/
export declare class RestMethodRequest extends SpeakeasyBase {
    dollarRef?: string;
    parameterName?: string;
}
/**
 * The schema for the response.
**/
export declare class RestMethodResponse extends SpeakeasyBase {
    dollarRef?: string;
}
export declare class RestMethod extends SpeakeasyBase {
    description?: string;
    etagRequired?: boolean;
    flatPath?: string;
    httpMethod?: string;
    id?: string;
    mediaUpload?: RestMethodMediaUpload;
    parameterOrder?: string[];
    parameters?: Map<string, JsonSchema>;
    path?: string;
    request?: RestMethodRequest;
    response?: RestMethodResponse;
    scopes?: string[];
    supportsMediaDownload?: boolean;
    supportsMediaUpload?: boolean;
    supportsSubscription?: boolean;
    useMediaDownloadService?: boolean;
}
