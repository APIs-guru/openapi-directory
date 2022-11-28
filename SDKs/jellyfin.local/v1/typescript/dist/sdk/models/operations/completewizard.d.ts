import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CompleteWizardSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class CompleteWizardRequest extends SpeakeasyBase {
    security: CompleteWizardSecurity;
}
export declare class CompleteWizardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
