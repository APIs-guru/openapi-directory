import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostOutlierHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostOutlierRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  outliersRequest?: shared.OutliersRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  outliersRequest1?: shared.OutliersRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  outliersRequest2?: shared.OutliersRequest;
}


export class PostOutlierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostOutlierHeaders;

  @SpeakeasyMetadata()
  request?: PostOutlierRequests;
}


export class PostOutlierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TimeSeriesOutliersResponse })
  timeSeriesOutliersResponses?: shared.TimeSeriesOutliersResponse[];
}
