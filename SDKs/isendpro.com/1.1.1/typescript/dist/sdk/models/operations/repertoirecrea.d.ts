import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RepertoireCreaRequest extends SpeakeasyBase {
    request: shared.RepertoirEcreaterequest;
}
export declare class RepertoireCreaResponse extends SpeakeasyBase {
    contentType: string;
    erreur?: shared.Erreur;
    repertoirEcreatereponse?: shared.RepertoirEcreatereponse;
    statusCode: number;
}
