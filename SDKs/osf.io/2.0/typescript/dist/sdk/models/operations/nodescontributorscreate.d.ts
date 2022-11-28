import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesContributorsCreatePathParams extends SpeakeasyBase {
    nodeId: string;
}
export declare enum NodesContributorsCreateContributorAttributesPermissionEnum {
    Read = "read",
    Write = "write",
    Admin = "admin"
}
/**
 * The properties of the contributor entity.
**/
export declare class NodesContributorsCreateContributorAttributesInput extends SpeakeasyBase {
    bibliographic?: boolean;
    index?: number;
    permission?: NodesContributorsCreateContributorAttributesPermissionEnum;
}
/**
 * URLs to other entities or entity collections that have a relationship to the contributor entity.
**/
export declare class NodesContributorsCreateContributorRelationshipsInput extends SpeakeasyBase {
    user: string;
}
export declare class NodesContributorsCreateContributorInput extends SpeakeasyBase {
    attributes?: NodesContributorsCreateContributorAttributesInput;
    relationships: NodesContributorsCreateContributorRelationshipsInput;
}
export declare class NodesContributorsCreateRequest extends SpeakeasyBase {
    pathParams: NodesContributorsCreatePathParams;
    request: NodesContributorsCreateContributorInput;
}
export declare class NodesContributorsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
