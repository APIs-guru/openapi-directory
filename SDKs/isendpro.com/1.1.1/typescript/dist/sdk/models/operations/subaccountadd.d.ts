import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SubaccountAddRequest extends SpeakeasyBase {
    request: shared.SubaccountAddRequest;
}
export declare class SubaccountAddResponse extends SpeakeasyBase {
    contentType: string;
    erreur?: shared.Erreur;
    statusCode: number;
    subaccountAddResponse?: shared.SubaccountAddResponse;
}
