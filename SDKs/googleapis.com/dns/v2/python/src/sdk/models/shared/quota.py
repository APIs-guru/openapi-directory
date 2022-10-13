from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dnskeyspec


@dataclass_json
@dataclass
class Quota:
    dns_keys_per_managed_zone: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dnsKeysPerManagedZone' }})
    gke_clusters_per_managed_zone: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gkeClustersPerManagedZone' }})
    gke_clusters_per_policy: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gkeClustersPerPolicy' }})
    gke_clusters_per_response_policy: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gkeClustersPerResponsePolicy' }})
    items_per_routing_policy: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemsPerRoutingPolicy' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    managed_zones: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedZones' }})
    managed_zones_per_gke_cluster: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedZonesPerGkeCluster' }})
    managed_zones_per_network: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedZonesPerNetwork' }})
    networks_per_managed_zone: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networksPerManagedZone' }})
    networks_per_policy: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networksPerPolicy' }})
    networks_per_response_policy: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networksPerResponsePolicy' }})
    peering_zones_per_target_network: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'peeringZonesPerTargetNetwork' }})
    policies: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policies' }})
    resource_records_per_rrset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceRecordsPerRrset' }})
    response_policies: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responsePolicies' }})
    response_policy_rules_per_response_policy: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responsePolicyRulesPerResponsePolicy' }})
    rrset_additions_per_change: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rrsetAdditionsPerChange' }})
    rrset_deletions_per_change: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rrsetDeletionsPerChange' }})
    rrsets_per_managed_zone: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rrsetsPerManagedZone' }})
    target_name_servers_per_managed_zone: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetNameServersPerManagedZone' }})
    target_name_servers_per_policy: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetNameServersPerPolicy' }})
    total_rrdata_size_per_change: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalRrdataSizePerChange' }})
    whitelisted_key_specs: Optional[List[dnskeyspec.DNSKeySpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'whitelistedKeySpecs' }})
    
