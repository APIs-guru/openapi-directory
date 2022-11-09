import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMapsUsingGet1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accId" })
  accId: string;
}


export class GetMapsUsingGet1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMapsUsingGet1PathParams;
}


export class GetMapsUsingGet1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getMapsUsingGet1200WildcardString?: string;
}
