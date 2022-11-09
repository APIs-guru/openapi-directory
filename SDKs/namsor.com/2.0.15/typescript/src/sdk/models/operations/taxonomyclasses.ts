import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TaxonomyClassesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=classifierName" })
  classifierName: string;
}


export class TaxonomyClassesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TaxonomyClassesPathParams;
}


export class TaxonomyClassesResponse extends SpeakeasyBase {
  @Metadata()
  apiClassifierTaxonomyOut?: shared.ApiClassifierTaxonomyOut;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
