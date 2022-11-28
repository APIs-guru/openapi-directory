import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetResourcesMediaIdSyndicateFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetResourcesMediaIdSyndicateFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=autoplay" })
  autoplay?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=cssClass" })
  cssClass?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=font-size" })
  fontSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=imageFloat" })
  imageFloat?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=imageMargin" })
  imageMargin?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=rel" })
  rel?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=stripBreaks" })
  stripBreaks?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=stripClasses" })
  stripClasses?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=stripImages" })
  stripImages?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=stripScripts" })
  stripScripts?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=stripStyles" })
  stripStyles?: boolean;
}


export class GetResourcesMediaIdSyndicateFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetResourcesMediaIdSyndicateFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetResourcesMediaIdSyndicateFormatQueryParams;
}


export class GetResourcesMediaIdSyndicateFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  syndicateMarshallerWrapped?: shared.SyndicateMarshallerWrapped;
}
