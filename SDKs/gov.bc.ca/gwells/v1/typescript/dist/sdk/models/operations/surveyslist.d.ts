import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SurveysListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    surveys?: shared.Survey[];
}
