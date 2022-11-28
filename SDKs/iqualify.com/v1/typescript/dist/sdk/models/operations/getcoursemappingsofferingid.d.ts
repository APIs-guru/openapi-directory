import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCourseMappingsOfferingIdPathParams extends SpeakeasyBase {
    offeringId: string;
}
export declare class GetCourseMappingsOfferingIdRequest extends SpeakeasyBase {
    pathParams: GetCourseMappingsOfferingIdPathParams;
}
export declare class GetCourseMappingsOfferingIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    getCourseMappingsOfferingId200ApplicationJsonStrings?: string[];
    statusCode: number;
}
