import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetHlrRequest extends SpeakeasyBase {
    request: shared.HlRrequest;
}
export declare class GetHlrResponse extends SpeakeasyBase {
    contentType: string;
    erreur?: shared.Erreur;
    hlrReponse?: shared.HlrReponse;
    statusCode: number;
}
