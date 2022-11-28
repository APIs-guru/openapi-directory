import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutCourseMappingsOfferingIdExternalCourseIdPathParams extends SpeakeasyBase {
    externalCourseId: string;
    offeringId: string;
}
export declare class PutCourseMappingsOfferingIdExternalCourseIdRequest extends SpeakeasyBase {
    pathParams: PutCourseMappingsOfferingIdExternalCourseIdPathParams;
}
export declare class PutCourseMappingsOfferingIdExternalCourseIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    putCourseMappingsOfferingIdExternalCourseId200ApplicationJsonStrings?: string[];
    statusCode: number;
}
