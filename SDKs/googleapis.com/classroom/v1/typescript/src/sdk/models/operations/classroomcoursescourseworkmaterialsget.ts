import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ClassroomCoursesCourseWorkMaterialsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=courseId" })
  courseId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ClassroomCoursesCourseWorkMaterialsGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ClassroomCoursesCourseWorkMaterialsGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClassroomCoursesCourseWorkMaterialsGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClassroomCoursesCourseWorkMaterialsGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ClassroomCoursesCourseWorkMaterialsGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ClassroomCoursesCourseWorkMaterialsGetSecurityOption2;
}


export class ClassroomCoursesCourseWorkMaterialsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ClassroomCoursesCourseWorkMaterialsGetPathParams;

  @Metadata()
  queryParams: ClassroomCoursesCourseWorkMaterialsGetQueryParams;

  @Metadata()
  security: ClassroomCoursesCourseWorkMaterialsGetSecurity;
}


export class ClassroomCoursesCourseWorkMaterialsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  courseWorkMaterial?: shared.CourseWorkMaterial;

  @Metadata()
  statusCode: number;
}
