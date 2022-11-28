import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCampagneRapportCampagneEnum {
    One = "1"
}
export declare class GetCampagneQueryParams extends SpeakeasyBase {
    dateDeb: string;
    dateFin: string;
    keyid: string;
    rapportCampagne: GetCampagneRapportCampagneEnum;
}
export declare class GetCampagneRequest extends SpeakeasyBase {
    queryParams: GetCampagneQueryParams;
}
export declare class GetCampagneResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    erreur?: shared.Erreur;
    statusCode: number;
    getCampagne200ApplicationJsonBinaryString?: Uint8Array;
    getCampagne200FileBinaryString?: Uint8Array;
}
