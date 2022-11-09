import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PolyAssetsListMaxComplexityEnum {
    ComplexityUnspecified = "COMPLEXITY_UNSPECIFIED"
,    Complex = "COMPLEX"
,    Medium = "MEDIUM"
,    Simple = "SIMPLE"
}


export class PolyAssetsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=category" })
  category?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=curated" })
  curated?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=keywords" })
  keywords?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxComplexity" })
  maxComplexity?: PolyAssetsListMaxComplexityEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class PolyAssetsListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PolyAssetsListQueryParams;
}


export class PolyAssetsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listAssetsResponse?: shared.ListAssetsResponse;

  @Metadata()
  statusCode: number;
}
