import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GenomicsProjectsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class GenomicsProjectsOperationsCancelQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GenomicsProjectsOperationsCancelSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GenomicsProjectsOperationsCancelSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GenomicsProjectsOperationsCancelSecurity extends SpeakeasyBase {
    option1?: GenomicsProjectsOperationsCancelSecurityOption1;
    option2?: GenomicsProjectsOperationsCancelSecurityOption2;
}
export declare class GenomicsProjectsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: GenomicsProjectsOperationsCancelPathParams;
    queryParams: GenomicsProjectsOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: GenomicsProjectsOperationsCancelSecurity;
}
export declare class GenomicsProjectsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
