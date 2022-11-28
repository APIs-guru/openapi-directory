import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteTagPathParams extends SpeakeasyBase {
    projectId: string;
    tagId: string;
}
export declare class DeleteTagHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class DeleteTagRequest extends SpeakeasyBase {
    pathParams: DeleteTagPathParams;
    headers: DeleteTagHeaders;
}
export declare class DeleteTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
