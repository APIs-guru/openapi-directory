import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAdministrationPlanningLevelLockHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostAdministrationPlanningLevelLockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostAdministrationPlanningLevelLockHeaders;
}


export class PostAdministrationPlanningLevelLockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
