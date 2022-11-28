import { SpeakeasyBase } from "../../../internal/utils";
export declare class AquifersFilesListPathParams extends SpeakeasyBase {
    aquiferId: string;
}
export declare class AquifersFilesList200ApplicationJsonPrivate extends SpeakeasyBase {
    name?: string;
    url?: string;
}
export declare class AquifersFilesList200ApplicationJsonPublic extends SpeakeasyBase {
    name?: string;
    url?: string;
}
export declare class AquifersFilesList200ApplicationJson extends SpeakeasyBase {
    private?: AquifersFilesList200ApplicationJsonPrivate[];
    public?: AquifersFilesList200ApplicationJsonPublic[];
}
export declare class AquifersFilesListRequest extends SpeakeasyBase {
    pathParams: AquifersFilesListPathParams;
}
export declare class AquifersFilesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    aquifersFilesList200ApplicationJsonObject?: AquifersFilesList200ApplicationJson;
}
