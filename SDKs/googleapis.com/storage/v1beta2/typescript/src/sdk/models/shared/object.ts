import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObjectAccessControl } from "./objectaccesscontrol";


// ObjectOwner
/** 
 * The owner of the object. This will always be the uploader of the object.
**/
export class ObjectOwner extends SpeakeasyBase {
  @Metadata({ data: "json, name=entity" })
  entity?: string;

  @Metadata({ data: "json, name=entityId" })
  entityId?: string;
}


// Object
/** 
 * An object.
**/
export class Object extends SpeakeasyBase {
  @Metadata({ data: "json, name=acl", elemType: shared.ObjectAccessControl })
  acl?: ObjectAccessControl[];

  @Metadata({ data: "json, name=bucket" })
  bucket?: string;

  @Metadata({ data: "json, name=cacheControl" })
  cacheControl?: string;

  @Metadata({ data: "json, name=componentCount" })
  componentCount?: number;

  @Metadata({ data: "json, name=contentDisposition" })
  contentDisposition?: string;

  @Metadata({ data: "json, name=contentEncoding" })
  contentEncoding?: string;

  @Metadata({ data: "json, name=contentLanguage" })
  contentLanguage?: string;

  @Metadata({ data: "json, name=contentType" })
  contentType?: string;

  @Metadata({ data: "json, name=crc32c" })
  crc32c?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=generation" })
  generation?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=md5Hash" })
  md5Hash?: string;

  @Metadata({ data: "json, name=mediaLink" })
  mediaLink?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=metageneration" })
  metageneration?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: ObjectOwner;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=size" })
  size?: string;

  @Metadata({ data: "json, name=storageClass" })
  storageClass?: string;

  @Metadata({ data: "json, name=timeDeleted" })
  timeDeleted?: Date;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;
}
