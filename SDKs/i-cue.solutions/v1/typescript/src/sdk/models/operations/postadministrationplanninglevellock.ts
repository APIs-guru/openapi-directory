import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAdministrationPlanningLevelLockHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostAdministrationPlanningLevelLockRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostAdministrationPlanningLevelLockHeaders;
}


export class PostAdministrationPlanningLevelLockResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
