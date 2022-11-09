import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum SetListeNoireSetlisteNoireEnum {
    One = "1"
}
export declare class SetListeNoireQueryParams extends SpeakeasyBase {
    keyid: string;
    num: string;
    setlisteNoire: SetListeNoireSetlisteNoireEnum;
}
export declare class SetListeNoireRequest extends SpeakeasyBase {
    queryParams: SetListeNoireQueryParams;
}
export declare class SetListeNoireResponse extends SpeakeasyBase {
    contentType: string;
    erreur?: shared.Erreur;
    listenoireReponse?: shared.ListenoireReponse;
    statusCode: number;
}
