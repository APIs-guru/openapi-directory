import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCountryListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  countryListVo?: any;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
