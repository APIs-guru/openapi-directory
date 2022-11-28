import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteCourseMappingsOfferingIdExternalCourseIdPathParams extends SpeakeasyBase {
    externalCourseId: string;
    offeringId: string;
}
export declare class DeleteCourseMappingsOfferingIdExternalCourseIdRequest extends SpeakeasyBase {
    pathParams: DeleteCourseMappingsOfferingIdExternalCourseIdPathParams;
}
export declare class DeleteCourseMappingsOfferingIdExternalCourseIdResponse extends SpeakeasyBase {
    contentType: string;
    deleteCourseMappingsOfferingIdExternalCourseId200ApplicationJsonStrings?: string[];
    error?: shared.Error;
    statusCode: number;
}
