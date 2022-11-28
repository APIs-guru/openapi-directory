import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DelListeNoireDelListeNoireEnum {
    One = "1"
}
export declare class DelListeNoireQueryParams extends SpeakeasyBase {
    delListeNoire: DelListeNoireDelListeNoireEnum;
    keyid: string;
    num: string;
}
export declare class DelListeNoireRequest extends SpeakeasyBase {
    queryParams: DelListeNoireQueryParams;
}
export declare class DelListeNoireResponse extends SpeakeasyBase {
    contentType: string;
    erreur?: shared.Erreur;
    listenoireReponse?: shared.ListenoireReponse;
    statusCode: number;
}
