import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetResourcesMediaIdSyndicateFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetResourcesMediaIdSyndicateFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=autoplay" })
  autoplay?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=false;name=cssClass" })
  cssClass?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=font-size" })
  fontSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=imageFloat" })
  imageFloat?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=imageMargin" })
  imageMargin?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=rel" })
  rel?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=false;name=stripBreaks" })
  stripBreaks?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=false;name=stripClasses" })
  stripClasses?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=false;name=stripImages" })
  stripImages?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=false;name=stripScripts" })
  stripScripts?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=false;name=stripStyles" })
  stripStyles?: boolean;
}


export class GetResourcesMediaIdSyndicateFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetResourcesMediaIdSyndicateFormatPathParams;

  @Metadata()
  queryParams: GetResourcesMediaIdSyndicateFormatQueryParams;
}


export class GetResourcesMediaIdSyndicateFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  syndicateMarshallerWrapped?: shared.SyndicateMarshallerWrapped;
}
