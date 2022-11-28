import { SpeakeasyBase } from "../../../internal/utils";
export declare class DrillersFilesListPathParams extends SpeakeasyBase {
    personGuid: string;
}
export declare class DrillersFilesList200ApplicationJsonPrivate extends SpeakeasyBase {
    name?: string;
    url?: string;
}
export declare class DrillersFilesList200ApplicationJsonPublic extends SpeakeasyBase {
    name?: string;
    url?: string;
}
export declare class DrillersFilesList200ApplicationJson extends SpeakeasyBase {
    private?: DrillersFilesList200ApplicationJsonPrivate[];
    public?: DrillersFilesList200ApplicationJsonPublic[];
}
export declare class DrillersFilesListRequest extends SpeakeasyBase {
    pathParams: DrillersFilesListPathParams;
}
export declare class DrillersFilesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    drillersFilesList200ApplicationJsonObject?: DrillersFilesList200ApplicationJson;
}
