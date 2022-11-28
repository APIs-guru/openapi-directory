import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FindTheRelativesOfAnEntityRelationEnum {
    Parent = "parent",
    Child = "child",
    Sibling = "sibling",
    Peer = "peer"
}
export declare class FindTheRelativesOfAnEntityPathParams extends SpeakeasyBase {
    relation: FindTheRelativesOfAnEntityRelationEnum;
}
export declare class FindTheRelativesOfAnEntityQueryParams extends SpeakeasyBase {
    appToken?: string;
    entityId: string;
    limit?: number;
    variableId?: string;
}
export declare class FindTheRelativesOfAnEntityHeaders extends SpeakeasyBase {
    xAppToken?: string;
}
export declare class FindTheRelativesOfAnEntityRequest extends SpeakeasyBase {
    pathParams: FindTheRelativesOfAnEntityPathParams;
    queryParams: FindTheRelativesOfAnEntityQueryParams;
    headers: FindTheRelativesOfAnEntityHeaders;
}
export declare class FindTheRelativesOfAnEntityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
