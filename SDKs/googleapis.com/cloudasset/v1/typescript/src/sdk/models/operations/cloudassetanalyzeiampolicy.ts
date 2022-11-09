import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CloudassetAnalyzeIamPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=scope" })
  scope: string;
}


export class CloudassetAnalyzeIamPolicyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.accessSelector.permissions" })
  analysisQueryAccessSelectorPermissions?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.accessSelector.roles" })
  analysisQueryAccessSelectorRoles?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.conditionContext.accessTime" })
  analysisQueryConditionContextAccessTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.identitySelector.identity" })
  analysisQueryIdentitySelectorIdentity?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.options.analyzeServiceAccountImpersonation" })
  analysisQueryOptionsAnalyzeServiceAccountImpersonation?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.options.expandGroups" })
  analysisQueryOptionsExpandGroups?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.options.expandResources" })
  analysisQueryOptionsExpandResources?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.options.expandRoles" })
  analysisQueryOptionsExpandRoles?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.options.outputGroupEdges" })
  analysisQueryOptionsOutputGroupEdges?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.options.outputResourceEdges" })
  analysisQueryOptionsOutputResourceEdges?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.resourceSelector.fullResourceName" })
  analysisQueryResourceSelectorFullResourceName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=executionTimeout" })
  executionTimeout?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=savedAnalysisQuery" })
  savedAnalysisQuery?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class CloudassetAnalyzeIamPolicySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudassetAnalyzeIamPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CloudassetAnalyzeIamPolicyPathParams;

  @Metadata()
  queryParams: CloudassetAnalyzeIamPolicyQueryParams;

  @Metadata()
  security: CloudassetAnalyzeIamPolicySecurity;
}


export class CloudassetAnalyzeIamPolicyResponse extends SpeakeasyBase {
  @Metadata()
  analyzeIamPolicyResponse?: shared.AnalyzeIamPolicyResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
