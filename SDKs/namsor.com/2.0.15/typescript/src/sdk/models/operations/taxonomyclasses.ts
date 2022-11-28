import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TaxonomyClassesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=classifierName" })
  classifierName: string;
}


export class TaxonomyClassesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TaxonomyClassesPathParams;
}


export class TaxonomyClassesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiClassifierTaxonomyOut?: shared.ApiClassifierTaxonomyOut;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
