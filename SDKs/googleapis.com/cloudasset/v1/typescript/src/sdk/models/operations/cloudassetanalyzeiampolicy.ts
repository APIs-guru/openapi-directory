import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CloudassetAnalyzeIamPolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scope" })
  scope: string;
}


export class CloudassetAnalyzeIamPolicyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.accessSelector.permissions" })
  analysisQueryAccessSelectorPermissions?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.accessSelector.roles" })
  analysisQueryAccessSelectorRoles?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.conditionContext.accessTime" })
  analysisQueryConditionContextAccessTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.identitySelector.identity" })
  analysisQueryIdentitySelectorIdentity?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.options.analyzeServiceAccountImpersonation" })
  analysisQueryOptionsAnalyzeServiceAccountImpersonation?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.options.expandGroups" })
  analysisQueryOptionsExpandGroups?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.options.expandResources" })
  analysisQueryOptionsExpandResources?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.options.expandRoles" })
  analysisQueryOptionsExpandRoles?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.options.outputGroupEdges" })
  analysisQueryOptionsOutputGroupEdges?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.options.outputResourceEdges" })
  analysisQueryOptionsOutputResourceEdges?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.resourceSelector.fullResourceName" })
  analysisQueryResourceSelectorFullResourceName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=executionTimeout" })
  executionTimeout?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=savedAnalysisQuery" })
  savedAnalysisQuery?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class CloudassetAnalyzeIamPolicySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudassetAnalyzeIamPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CloudassetAnalyzeIamPolicyPathParams;

  @SpeakeasyMetadata()
  queryParams: CloudassetAnalyzeIamPolicyQueryParams;

  @SpeakeasyMetadata()
  security: CloudassetAnalyzeIamPolicySecurity;
}


export class CloudassetAnalyzeIamPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  analyzeIamPolicyResponse?: shared.AnalyzeIamPolicyResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
