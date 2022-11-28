import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostShipmentPathParams extends SpeakeasyBase {
    projectId: string;
    workgroupId: string;
}
export declare class PostShipmentRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    applicationXYaml: Uint8Array;
    shipmentLocationPostPersistVo?: any;
    shipmentLocationPostPersistVo1?: any;
    textCsv: Uint8Array;
    textXml: Uint8Array;
    textXYaml: Uint8Array;
}
export declare class PostShipmentRequest extends SpeakeasyBase {
    pathParams: PostShipmentPathParams;
    request?: PostShipmentRequests;
}
export declare class PostShipmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    shipmentLocationsPostResultVo?: any;
    statusCode: number;
}
