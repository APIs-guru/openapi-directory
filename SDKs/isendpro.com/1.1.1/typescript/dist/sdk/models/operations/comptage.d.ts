import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ComptageRequest extends SpeakeasyBase {
    request: shared.ComptageRequest;
}
export declare class ComptageResponse extends SpeakeasyBase {
    comptageReponse?: shared.ComptageReponse;
    contentType: string;
    erreur?: shared.Erreur;
    statusCode: number;
}
