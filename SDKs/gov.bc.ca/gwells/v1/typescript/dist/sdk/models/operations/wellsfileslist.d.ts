import { SpeakeasyBase } from "../../../internal/utils";
export declare class WellsFilesListPathParams extends SpeakeasyBase {
    tag: string;
}
export declare class WellsFilesList200ApplicationJsonPrivate extends SpeakeasyBase {
    name?: string;
    url?: string;
}
export declare class WellsFilesList200ApplicationJsonPublic extends SpeakeasyBase {
    name?: string;
    url?: string;
}
export declare class WellsFilesList200ApplicationJson extends SpeakeasyBase {
    private?: WellsFilesList200ApplicationJsonPrivate[];
    public?: WellsFilesList200ApplicationJsonPublic[];
}
export declare class WellsFilesListRequest extends SpeakeasyBase {
    pathParams: WellsFilesListPathParams;
}
export declare class WellsFilesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    wellsFilesList200ApplicationJsonObject?: WellsFilesList200ApplicationJson;
}
