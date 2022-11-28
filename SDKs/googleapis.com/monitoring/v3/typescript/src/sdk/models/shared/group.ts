import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Group
/** 
 * The description of a dynamic collection of monitored resources. Each group has a filter that is matched against monitored resources and their associated metadata. If a group's filter matches an available monitored resource, then that resource is a member of that group. Groups can contain any number of monitored resources, and each monitored resource can be a member of any number of groups.Groups can be nested in parent-child hierarchies. The parentName field identifies an optional parent for each group. If a group has a parent, then the only monitored resources available to be matched by the group's filter are the resources contained in the parent group. In other words, a group contains the monitored resources that match its filter and the filters of all the group's ancestors. A group without a parent can contain any monitored resource.For example, consider an infrastructure running a set of instances with two user-defined tags: "environment" and "role". A parent group has a filter, environment="production". A child of that parent group has a filter, role="transcoder". The parent group contains all instances in the production environment, regardless of their roles. The child group contains instances that have the transcoder role and are in the production environment.The monitored resources contained in a group can change at any moment, depending on what resources exist and what filters are associated with the group and its ancestors.
**/
export class Group extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=isCluster" })
  isCluster?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentName" })
  parentName?: string;
}
