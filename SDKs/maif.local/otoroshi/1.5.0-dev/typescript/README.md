# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { AllApiKeysRequest, AllApiKeysResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AllApiKeysRequest = {
  security: {
    otoroshiAuth: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
};

sdk.apikeys.allApiKeys(req).then((res: AllApiKeysResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### apikeys

* `allApiKeys` - Get all api keys
* `apiKey` - Get an api key
* `apiKeyFromGroup` - Get an api key
* `apiKeyFromGroupQuotas` - Get the quota state of an api key
* `apiKeyGroup` - Get the group of an api key
* `apiKeyQuotas` - Get the quota state of an api key
* `apiKeys` - Get all api keys for the group of a service
* `apiKeysFromGroup` - Get all api keys for the group of a service
* `createApiKey` - Create a new api key for a service
* `createApiKeyFromGroup` - Create a new api key for a group
* `deleteApiKey` - Delete an api key
* `deleteApiKeyFromGroup` - Delete an api key
* `patchApiKey` - Update an api key with a diff
* `patchApiKeyFromGroup` - Update an api key with a diff
* `resetApiKeyFromGroupQuotas` - Reset the quota state of an api key
* `resetApiKeyQuotas` - Reset the quota state of an api key
* `updateApiKey` - Update an api key
* `updateApiKeyFromGroup` - Update an api key

### auth-config

* `createGlobalAuthModule` - Create one global auth. module config
* `deleteGlobalAuthModule` - Delete one global auth. module config
* `findAllGlobalAuthModules` - Get all global auth. module configs
* `findGlobalAuthModuleById` - Get one global auth. module configs
* `patchGlobalAuthModule` - Update one global auth. module config
* `updateGlobalAuthModule` - Update one global auth. module config

### certificates

* `allCerts` - Get all certificates
* `createCert` - Create one certificate
* `deleteCert` - Delete one certificate by id
* `oneCert` - Get one certificate by id
* `patchCert` - Update one certificate by id
* `putCert` - Update one certificate by id

### configuration

* `globalConfig` - Get the full configuration of Otoroshi
* `patchGlobalConfig` - Update the global configuration with a diff
* `putGlobalConfig` - Update the global configuration

### data-exporter-configs

* `dataExporterTemplate` - Get all data exporter configs
* `createBulkDataExporterConfigs` - Create a new data exporter configs
* `createDataExporterConfig` - Create a new data exporter config
* `deleteDataExporterConfig` - Delete a data exporter config
* `deletebulkDataExporterConfig` - Delete a data exporter config
* `findAllDataExporters` - Get all data exporter configs
* `findDataExporterConfigById` - Get a data exporter config
* `patchBulkDataExporterConfig` - Update a data exporter configs with a diff
* `patchDataExporterConfig` - Update a data exporter config with a diff
* `updateBulkDataExporterConfig` - Update a data exporter configs
* `updateDataExporterConfig` - Update a data exporter config

### environments

* `allLines` - Get all environments
* `servicesForALine` - Get all services for an environment

### groups

* `allServiceGroups` - Get all service groups
* `createGroup` - Create a new service group
* `deleteGroup` - Delete a service group
* `patchGroup` - Update a service group with a diff
* `serviceGroup` - Get a service group
* `updateGroup` - Update a service group

### health

* `health` - Return current Otoroshi health

### import

* `fullExport` - Export the full state of Otoroshi
* `fullImport` - Import the full state of Otoroshi
* `fullImportFromFile` - Import the full state of Otoroshi as a file

### jwt-verifiers

* `createGlobalJwtVerifier` - Create one global JWT verifiers
* `deleteGlobalJwtVerifier` - Delete one global JWT verifiers
* `findAllGlobalJwtVerifiers` - Get all global JWT verifiers
* `findGlobalJwtVerifiersById` - Get one global JWT verifiers
* `patchGlobalJwtVerifier` - Update one global JWT verifiers
* `updateGlobalJwtVerifier` - Update one global JWT verifiers

### scripts

* `compileScript` - Compile a script
* `createScript` - Create a new script
* `deleteScript` - Delete a script
* `findAllScripts` - Get all scripts
* `findScriptById` - Get a script
* `patchScript` - Update a script with a diff
* `updateScript` - Update a script

### services

* `allServices` - Get all services
* `createService` - Create a new service descriptor
* `createServiceTemplate` - Create a service descriptor error template
* `deleteService` - Delete a service descriptor
* `deleteServiceTemplate` - Delete a service descriptor error template
* `patchService` - Update a service descriptor with a diff
* `service` - Get a service descriptor
* `serviceAddTarget` - Add a target to a service descriptor
* `serviceDeleteTarget` - Delete a service descriptor target
* `serviceGroupServices` - Get all services descriptor for a group
* `serviceTargets` - Get a service descriptor targets
* `serviceTemplate` - Get a service descriptor error template
* `updateService` - Update a service descriptor
* `updateServiceTargets` - Update a service descriptor targets
* `updateServiceTemplate` - Update an error template to a service descriptor

### snowmonkey

* `getSnowMonkeyConfig` - Get current Snow Monkey config
* `getSnowMonkeyOutages` - Get all current Snow Monkey ourages
* `patchSnowMonkey` - Update current Snow Monkey config
* `resetSnowMonkey` - Reset Snow Monkey Outages for the day
* `startSnowMonkey` - Start the Snow Monkey
* `stopSnowMonkey` - Stop the Snow Monkey
* `updateSnowMonkey` - Update current Snow Monkey config

### stats

* `globalLiveStats` - Get global otoroshi stats
* `serviceLiveStats` - Get live feed of otoroshi stats

### templates

* `initiateApiKey` - Get a template of an Otoroshi Api Key
* `initiateService` - Get a template of an Otoroshi service descriptor
* `initiateServiceGroup` - Get a template of an Otoroshi service group

### validation-authorities

* `createClientValidator` - Create one validation authorities
* `deleteClientValidator` - Delete one validation authorities by id
* `findAllClientValidators` - Get all validation authoritiess
* `findClientValidatorById` - Get one validation authorities by id
* `patchClientValidator` - Update one validation authorities by id
* `updateClientValidator` - Update one validation authorities by id

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
