import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SubaccountEditRequest extends SpeakeasyBase {
    request: shared.SubaccountRequest;
}
export declare class SubaccountEditResponse extends SpeakeasyBase {
    contentType: string;
    erreur?: shared.Erreur;
    statusCode: number;
    subaccountResponse?: shared.SubaccountResponse;
}
