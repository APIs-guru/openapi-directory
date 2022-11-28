from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConsumerConfigInput:
    r"""ConsumerConfigInput
    Configuration information for a private service access connection.
    """
    
    cloudsql_configs: Optional[List[CloudSQLConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudsqlConfigs') }})
    consumer_export_custom_routes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerExportCustomRoutes') }})
    consumer_export_subnet_routes_with_public_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerExportSubnetRoutesWithPublicIp') }})
    consumer_import_custom_routes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerImportCustomRoutes') }})
    consumer_import_subnet_routes_with_public_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerImportSubnetRoutesWithPublicIp') }})
    producer_export_custom_routes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('producerExportCustomRoutes') }})
    producer_export_subnet_routes_with_public_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('producerExportSubnetRoutesWithPublicIp') }})
    producer_import_custom_routes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('producerImportCustomRoutes') }})
    producer_import_subnet_routes_with_public_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('producerImportSubnetRoutesWithPublicIp') }})
    

@dataclass_json
@dataclass
class ConsumerConfig:
    r"""ConsumerConfig
    Configuration information for a private service access connection.
    """
    
    cloudsql_configs: Optional[List[CloudSQLConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudsqlConfigs') }})
    consumer_export_custom_routes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerExportCustomRoutes') }})
    consumer_export_subnet_routes_with_public_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerExportSubnetRoutesWithPublicIp') }})
    consumer_import_custom_routes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerImportCustomRoutes') }})
    consumer_import_subnet_routes_with_public_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerImportSubnetRoutesWithPublicIp') }})
    producer_export_custom_routes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('producerExportCustomRoutes') }})
    producer_export_subnet_routes_with_public_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('producerExportSubnetRoutesWithPublicIp') }})
    producer_import_custom_routes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('producerImportCustomRoutes') }})
    producer_import_subnet_routes_with_public_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('producerImportSubnetRoutesWithPublicIp') }})
    producer_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('producerNetwork') }})
    reserved_ranges: Optional[List[GoogleCloudServicenetworkingV1ConsumerConfigReservedRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservedRanges') }})
    used_ip_ranges: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usedIpRanges') }})
    vpc_sc_reference_architecture_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcScReferenceArchitectureEnabled') }})
    
