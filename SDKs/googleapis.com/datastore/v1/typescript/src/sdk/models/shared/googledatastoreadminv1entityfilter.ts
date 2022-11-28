import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleDatastoreAdminV1EntityFilter
/** 
 * Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz']
**/
export class GoogleDatastoreAdminV1EntityFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kinds" })
  kinds?: string[];

  @SpeakeasyMetadata({ data: "json, name=namespaceIds" })
  namespaceIds?: string[];
}
