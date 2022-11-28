import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesContributorsPartialUpdatePathParams extends SpeakeasyBase {
    nodeId: string;
    userId: string;
}
export declare enum NodesContributorsPartialUpdateContributorAttributesPermissionEnum {
    Read = "read",
    Write = "write",
    Admin = "admin"
}
/**
 * The properties of the contributor entity.
**/
export declare class NodesContributorsPartialUpdateContributorAttributesInput extends SpeakeasyBase {
    bibliographic?: boolean;
    index?: number;
    permission?: NodesContributorsPartialUpdateContributorAttributesPermissionEnum;
}
/**
 * URLs to other entities or entity collections that have a relationship to the contributor entity.
**/
export declare class NodesContributorsPartialUpdateContributorRelationshipsInput extends SpeakeasyBase {
    user: string;
}
export declare class NodesContributorsPartialUpdateContributorInput extends SpeakeasyBase {
    attributes?: NodesContributorsPartialUpdateContributorAttributesInput;
    relationships: NodesContributorsPartialUpdateContributorRelationshipsInput;
}
export declare class NodesContributorsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: NodesContributorsPartialUpdatePathParams;
    request: NodesContributorsPartialUpdateContributorInput;
}
export declare class NodesContributorsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
