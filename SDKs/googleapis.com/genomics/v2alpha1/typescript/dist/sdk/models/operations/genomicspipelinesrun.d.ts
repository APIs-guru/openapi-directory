import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GenomicsPipelinesRunQueryParams extends SpeakeasyBase {
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
export declare class GenomicsPipelinesRunSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GenomicsPipelinesRunSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GenomicsPipelinesRunSecurity extends SpeakeasyBase {
    option1?: GenomicsPipelinesRunSecurityOption1;
    option2?: GenomicsPipelinesRunSecurityOption2;
}
export declare class GenomicsPipelinesRunRequest extends SpeakeasyBase {
    queryParams: GenomicsPipelinesRunQueryParams;
    request?: shared.RunPipelineRequest;
    security: GenomicsPipelinesRunSecurity;
}
export declare class GenomicsPipelinesRunResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
