import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetListeNoireGetListeNoireEnum {
    One = "1"
}
export declare class GetListeNoireQueryParams extends SpeakeasyBase {
    getListeNoire: GetListeNoireGetListeNoireEnum;
    keyid: string;
}
export declare class GetListeNoireRequest extends SpeakeasyBase {
    queryParams: GetListeNoireQueryParams;
}
export declare class GetListeNoireResponse extends SpeakeasyBase {
    contentType: string;
    erreur?: shared.Erreur;
    statusCode: number;
    getListeNoire200ApplicationJsonBinaryString?: Uint8Array;
}
