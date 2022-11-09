import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostOutlierHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostOutlierRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  outliersRequest?: shared.OutliersRequest;

  @Metadata({ data: "request, media_type=application/json" })
  outliersRequest1?: shared.OutliersRequest;

  @Metadata({ data: "request, media_type=text/json" })
  outliersRequest2?: shared.OutliersRequest;
}


export class PostOutlierRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostOutlierHeaders;

  @Metadata()
  request?: PostOutlierRequests;
}


export class PostOutlierResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TimeSeriesOutliersResponse })
  timeSeriesOutliersResponses?: shared.TimeSeriesOutliersResponse[];
}
