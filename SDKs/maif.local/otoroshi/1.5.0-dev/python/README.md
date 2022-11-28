# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AllAPIKeysRequest(
    security=operations.AllAPIKeysSecurity(
        otoroshi_auth=shared.SchemeOtoroshiAuth(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
)
    
res = s.apikeys.all_api_keys(req)

if res.api_keys is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### apikeys

* `all_api_keys` - Get all api keys
* `api_key` - Get an api key
* `api_key_from_group` - Get an api key
* `api_key_from_group_quotas` - Get the quota state of an api key
* `api_key_group` - Get the group of an api key
* `api_key_quotas` - Get the quota state of an api key
* `api_keys` - Get all api keys for the group of a service
* `api_keys_from_group` - Get all api keys for the group of a service
* `create_api_key` - Create a new api key for a service
* `create_api_key_from_group` - Create a new api key for a group
* `delete_api_key` - Delete an api key
* `delete_api_key_from_group` - Delete an api key
* `patch_api_key` - Update an api key with a diff
* `patch_api_key_from_group` - Update an api key with a diff
* `reset_api_key_from_group_quotas` - Reset the quota state of an api key
* `reset_api_key_quotas` - Reset the quota state of an api key
* `update_api_key` - Update an api key
* `update_api_key_from_group` - Update an api key

### auth-config

* `create_global_auth_module` - Create one global auth. module config
* `delete_global_auth_module` - Delete one global auth. module config
* `find_all_global_auth_modules` - Get all global auth. module configs
* `find_global_auth_module_by_id` - Get one global auth. module configs
* `patch_global_auth_module` - Update one global auth. module config
* `update_global_auth_module` - Update one global auth. module config

### certificates

* `all_certs` - Get all certificates
* `create_cert` - Create one certificate
* `delete_cert` - Delete one certificate by id
* `one_cert` - Get one certificate by id
* `patch_cert` - Update one certificate by id
* `put_cert` - Update one certificate by id

### configuration

* `global_config` - Get the full configuration of Otoroshi
* `patch_global_config` - Update the global configuration with a diff
* `put_global_config` - Update the global configuration

### data-exporter-configs

* `data_exporter_template` - Get all data exporter configs
* `create_bulk_data_exporter_configs` - Create a new data exporter configs
* `create_data_exporter_config` - Create a new data exporter config
* `delete_data_exporter_config` - Delete a data exporter config
* `deletebulk_data_exporter_config` - Delete a data exporter config
* `find_all_data_exporters` - Get all data exporter configs
* `find_data_exporter_config_by_id` - Get a data exporter config
* `patch_bulk_data_exporter_config` - Update a data exporter configs with a diff
* `patch_data_exporter_config` - Update a data exporter config with a diff
* `update_bulk_data_exporter_config` - Update a data exporter configs
* `update_data_exporter_config` - Update a data exporter config

### environments

* `all_lines` - Get all environments
* `services_for_a_line` - Get all services for an environment

### groups

* `all_service_groups` - Get all service groups
* `create_group` - Create a new service group
* `delete_group` - Delete a service group
* `patch_group` - Update a service group with a diff
* `service_group` - Get a service group
* `update_group` - Update a service group

### health

* `health` - Return current Otoroshi health

### import

* `full_export` - Export the full state of Otoroshi
* `full_import` - Import the full state of Otoroshi
* `full_import_from_file` - Import the full state of Otoroshi as a file

### jwt-verifiers

* `create_global_jwt_verifier` - Create one global JWT verifiers
* `delete_global_jwt_verifier` - Delete one global JWT verifiers
* `find_all_global_jwt_verifiers` - Get all global JWT verifiers
* `find_global_jwt_verifiers_by_id` - Get one global JWT verifiers
* `patch_global_jwt_verifier` - Update one global JWT verifiers
* `update_global_jwt_verifier` - Update one global JWT verifiers

### scripts

* `compile_script` - Compile a script
* `create_script` - Create a new script
* `delete_script` - Delete a script
* `find_all_scripts` - Get all scripts
* `find_script_by_id` - Get a script
* `patch_script` - Update a script with a diff
* `update_script` - Update a script

### services

* `all_services` - Get all services
* `create_service` - Create a new service descriptor
* `create_service_template` - Create a service descriptor error template
* `delete_service` - Delete a service descriptor
* `delete_service_template` - Delete a service descriptor error template
* `patch_service` - Update a service descriptor with a diff
* `service` - Get a service descriptor
* `service_add_target` - Add a target to a service descriptor
* `service_delete_target` - Delete a service descriptor target
* `service_group_services` - Get all services descriptor for a group
* `service_targets` - Get a service descriptor targets
* `service_template` - Get a service descriptor error template
* `update_service` - Update a service descriptor
* `update_service_targets` - Update a service descriptor targets
* `update_service_template` - Update an error template to a service descriptor

### snowmonkey

* `get_snow_monkey_config` - Get current Snow Monkey config
* `get_snow_monkey_outages` - Get all current Snow Monkey ourages
* `patch_snow_monkey` - Update current Snow Monkey config
* `reset_snow_monkey` - Reset Snow Monkey Outages for the day
* `start_snow_monkey` - Start the Snow Monkey
* `stop_snow_monkey` - Stop the Snow Monkey
* `update_snow_monkey` - Update current Snow Monkey config

### stats

* `global_live_stats` - Get global otoroshi stats
* `service_live_stats` - Get live feed of otoroshi stats

### templates

* `initiate_api_key` - Get a template of an Otoroshi Api Key
* `initiate_service` - Get a template of an Otoroshi service descriptor
* `initiate_service_group` - Get a template of an Otoroshi service group

### validation-authorities

* `create_client_validator` - Create one validation authorities
* `delete_client_validator` - Delete one validation authorities by id
* `find_all_client_validators` - Get all validation authoritiess
* `find_client_validator_by_id` - Get one validation authorities by id
* `patch_client_validator` - Update one validation authorities by id
* `update_client_validator` - Update one validation authorities by id

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
