import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMapsUsingGet1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accId" })
  accId: string;
}


export class GetMapsUsingGet1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMapsUsingGet1PathParams;
}


export class GetMapsUsingGet1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getMapsUsingGet1200WildcardString?: string;
}
