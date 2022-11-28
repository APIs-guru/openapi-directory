import { SpeakeasyBase } from "../../../internal/utils";
export declare class Domain extends SpeakeasyBase {
    correctCname?: string;
    created?: Date;
    domain: string;
    id: string;
    isResolving: boolean;
    isSslEnabled?: boolean;
    isSslOnly?: boolean;
    isUsedForBlogPost: boolean;
    isUsedForEmail: boolean;
    isUsedForKnowledge: boolean;
    isUsedForLandingPage: boolean;
    isUsedForSitePage: boolean;
    manuallyMarkedAsResolving?: boolean;
    primaryBlogPost?: boolean;
    primaryEmail?: boolean;
    primaryKnowledge?: boolean;
    primaryLandingPage?: boolean;
    primarySitePage?: boolean;
    secondaryToDomain?: string;
    updated?: Date;
}
