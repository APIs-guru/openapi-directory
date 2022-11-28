import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutShipmentLocationPathParams extends SpeakeasyBase {
    locationId: string;
    projectId: string;
    shipmentId: string;
    workgroupId: string;
}
export declare class PutShipmentLocationRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    applicationXYaml: Uint8Array;
    shipmentLocationPersistVo?: any;
    shipmentLocationPersistVo1?: any;
    textCsv: Uint8Array;
    textXml: Uint8Array;
    textXYaml: Uint8Array;
}
export declare class PutShipmentLocationRequest extends SpeakeasyBase {
    pathParams: PutShipmentLocationPathParams;
    request?: PutShipmentLocationRequests;
}
export declare class PutShipmentLocationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
}
