import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetActionOrganizationShowQueryParams extends SpeakeasyBase {
    id?: string;
    includeDatasets?: boolean;
}
export declare class GetActionOrganizationShowRequest extends SpeakeasyBase {
    queryParams: GetActionOrganizationShowQueryParams;
}
export declare class GetActionOrganizationShowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
