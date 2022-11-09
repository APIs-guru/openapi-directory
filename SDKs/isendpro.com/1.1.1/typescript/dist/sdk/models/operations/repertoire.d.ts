import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RepertoireRequest extends SpeakeasyBase {
    request: shared.RepertoirEmodifrequest;
}
export declare class RepertoireResponse extends SpeakeasyBase {
    contentType: string;
    erreur?: shared.Erreur;
    repertoirEmodifreponse?: shared.RepertoirEmodifreponse;
    statusCode: number;
}
